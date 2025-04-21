import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    if (!formData.email.includes('@')) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // This would normally send data to the backend
      // For demo, we'll simulate with a timeout
      setTimeout(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        setIsSubmitting(false);
      }, 1000);

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="px-4 md:px-8 py-20 section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 flex items-center">
          <span className="text-neonBlue font-mono mr-4">05.</span>
          <span>Get In Touch</span>
          <div className="ml-4 h-px bg-textSecondary bg-opacity-30 flex-grow"></div>
        </h2>
        
        <p className="text-textSecondary text-lg max-w-2xl mx-auto text-center mb-10">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll do my best to get back to you!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-textPrimary">Contact Information</h3>
              <p className="text-textSecondary">Feel free to reach out through any of these channels:</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-neonBlue bg-opacity-10 flex items-center justify-center">
                  <i className="fas fa-envelope text-neonBlue"></i>
                </div>
                <div>
                  <p className="text-sm text-textSecondary">Email</p>
                  <a href="mailto:gautamsuyog58@gmail.com" className="text-textPrimary hover:text-neonBlue transition-colors">
                    gautamsuyog58@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-neonBlue bg-opacity-10 flex items-center justify-center">
                  <i className="fas fa-phone text-neonBlue"></i>
                </div>
                <div>
                  <p className="text-sm text-textSecondary">Phone</p>
                  <a href="tel:+9779863048953" className="text-textPrimary hover:text-neonBlue transition-colors">
                    +977 9863048953
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-neonBlue bg-opacity-10 flex items-center justify-center">
                  <i className="fab fa-github text-neonBlue"></i>
                </div>
                <div>
                  <p className="text-sm text-textSecondary">GitHub</p>
                  <a href="https://github.com/suyog-gautam" target="_blank" rel="noopener noreferrer" className="text-textPrimary hover:text-neonBlue transition-colors">
                    github.com/suyog-gautam
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <a href="#" className="inline-block px-6 py-3 bg-neonBlue bg-opacity-10 text-neonBlue border border-neonBlue rounded hover:bg-opacity-20 transition-all duration-300">
                <i className="fas fa-download mr-2"></i> Download Resume
              </a>
            </div>
          </div>
          
          <div className="bg-darkBlue bg-opacity-30 p-6 rounded-lg border border-textSecondary border-opacity-10">
            <h3 className="text-xl font-semibold text-textPrimary mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-textSecondary mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-midnight border border-textSecondary border-opacity-30 rounded px-4 py-2 text-textPrimary focus:border-neonBlue focus:outline-none" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-textSecondary mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-midnight border border-textSecondary border-opacity-30 rounded px-4 py-2 text-textPrimary focus:border-neonBlue focus:outline-none" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-textSecondary mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full bg-midnight border border-textSecondary border-opacity-30 rounded px-4 py-2 text-textPrimary focus:border-neonBlue focus:outline-none resize-none" 
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-neonBlue text-midnight font-medium py-2 rounded hover:bg-opacity-90 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
