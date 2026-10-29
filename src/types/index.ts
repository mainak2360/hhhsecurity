export type PageId = 'home' | 'about' | 'services' | 'industries' | 'careers' | 'contact' | 'quote';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  status: 'Confirmed' | 'Tailored Scope (Client Approval Required)';
  category: 'manned' | 'electronic' | 'facility';
  benefits: string[];
  suitableIndustries: string[];
  keyDeliverables: string[];
  minimumPersonnel?: string;
  sopHighlights: string[];
  icon: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  keyRisksAddressed: string[];
  recommendedServices: string[];
  typicalShiftSetup: string;
  icon: string;
}

export interface JobVacancy {
  id: string;
  title: string;
  type: string;
  location: string;
  openings: number;
  minExperience: string;
  eligibility: string[];
  responsibilities: string[];
}

export interface CareerApplication {
  id: string;
  timestamp: string;
  fullName: string;
  phone: string;
  email?: string;
  preferredRole: string;
  location: string;
  district: string;
  experienceYears: string;
  isExServiceman: boolean;
  education: string;
  message?: string;
  fileName?: string;
  consentGiven: boolean;
}

export interface QuoteRequest {
  id: string;
  referenceNo: string;
  timestamp: string;
  customerName: string;
  companyName: string;
  phone: string;
  email: string;
  requiredServices: string[];
  siteLocation: string;
  district: string;
  numberOfGuards: number;
  shiftRequirements: '8h-day' | '8h-night' | '12h-rotational' | '24-7-continuous';
  commencementDate: string;
  additionalRequirements?: string;
  estimatedBudgetRange?: string;
  status: 'pending' | 'in-review' | 'contacted';
}

export interface ContactMessage {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  serviceCategory?: string;
  message: string;
  preferredTime?: string;
}

export interface VerificationChecklistItem {
  id: string;
  title: string;
  category: 'legal' | 'contact' | 'digital' | 'operations';
  description: string;
  currentStatus: 'configured' | 'pending_owner_verification';
  placeholderValue: string;
  actionRequired: string;
}
