import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/treatments', label: 'Treatments' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-semibold text-foreground" style={{ letterSpacing: '-0.01em' }}>
                Pandit Ganesh Narayan
              </span>
              <p className="text-xs text-muted-foreground">Homeopathic Clinic</p>
            </div>
            <span className="sm:hidden text-lg font-semibold text-foreground">PSGN Clinic</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919024547154"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>9024547154</span>
            </a>
            <Button asChild className="transition-all duration-200 active:scale-[0.98]">
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-base font-semibold text-foreground block">
                      PSGN Clinic
                    </span>
                    <p className="text-xs text-muted-foreground">Homeopathic Care</p>
                  </div>
                </div>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive(link.path)
                          ? 'text-primary bg-primary/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <a
                  href="tel:+919024547154"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-primary bg-primary/10 transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: 9024547154</span>
                </a>

                <Button asChild className="w-full transition-all duration-200 active:scale-[0.98]">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;