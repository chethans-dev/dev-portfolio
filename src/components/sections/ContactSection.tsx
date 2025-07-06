"use client";

import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, Send, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { AnimatedScrollWrapper } from '@/components/common/AnimatedScrollWrapper';
import emailjs from '@emailjs/browser';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormErrors = {
  name?: string;
  email?: string;
  message?: string;
};


function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <Button type="submit" disabled={isSubmitting} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export function ContactSection({ id }: { id: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<ContactFormErrors>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      const fieldErrors: ContactFormErrors = {};
      const flatErrors = validatedFields.error.flatten().fieldErrors;
      if (flatErrors.name) fieldErrors.name = flatErrors.name[0];
      if (flatErrors.email) fieldErrors.email = flatErrors.email[0];
      if (flatErrors.message) fieldErrors.message = flatErrors.message[0];
      setErrors(fieldErrors);
      return;
    }
    
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId === 'YOUR_SERVICE_ID') {
      toast({
        title: "Configuration Error",
        description: "EmailJS is not configured. Please add credentials to the .env file.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      if(formRef.current) {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        toast({
          title: "Message Sent!",
          description: "Thank you for your message! I'll get back to you soon.",
        });
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { href: "https://github.com/chethans-dev", icon: Github, label: "GitHub", user: "@chethans-dev" },
    { href: "https://www.linkedin.com/in/chethans-dev", icon: Linkedin, label: "LinkedIn", user: "chethans-dev" },
    { href: "mailto:chethans4667@gmail.com", icon: Mail, label: "Email", user: "chethans4667@gmail.com" },
  ];

  return (
    <section id={id}>
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedScrollWrapper>
          <h2 className="section-title">Get In Touch</h2>
        </AnimatedScrollWrapper>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <AnimatedScrollWrapper delay={200}>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Send me a message</CardTitle>
                <CardDescription>
                  Have a project in mind, a question, or just want to connect? Feel free to reach out!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" type="text" placeholder="Your Name" required className="mt-1" />
                    {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="mt-1" />
                     {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message..." required rows={5} className="mt-1" />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                  </div>
                  <SubmitButton isSubmitting={isSubmitting} />
                </form>
              </CardContent>
            </Card>
          </AnimatedScrollWrapper>

          <AnimatedScrollWrapper delay={400}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <p className="text-foreground/80 mb-6">
                  Alternatively, you can find me on these platforms or drop me an email directly. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
                </p>
              </div>
              <div className="space-y-4">
                {socialLinks.map(social => (
                  <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group p-3 rounded-lg hover:bg-primary/10 transition-colors duration-200">
                    <social.icon className="h-7 w-7 text-accent group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium text-foreground">{social.label}</p>
                      <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">{social.user}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedScrollWrapper>
        </div>
      </div>
    </section>
  );
}
