// TypeScript types pour l'application
export interface User {
  id: string;
  email: string;
  company_name?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Model {
  id: string;
  user_id: string;
  stage_name: string;
  real_name?: string;
  avatar_url?: string;
  aliases: string[];
  twitter_handle?: string;
  instagram_handle?: string;
  onlyfans_url?: string;
  mym_url?: string;
  patreon_url?: string;
  custom_links?: Record<string, string>;
  is_active: boolean;
  scan_frequency: string;
  created_at: string;
  updated_at: string;
}

export interface DetectedLeak {
  id: string;
  user_id: string;
  model_id: string;
  url: string;
  domain: string;
  title?: string;
  description?: string;
  leak_type: string;
  confidence_score: number;
  is_probably_leak: boolean;
  status: "new" | "dmca_sent" | "awaiting_response" | "deleted" | "refused" | "false_positive";
  first_dmca_sent_at?: string;
  last_dmca_sent_at?: string;
  dmca_sends_count: number;
  discovered_at: string;
  source: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface DMCARequest {
  id: string;
  user_id: string;
  leak_id: string;
  recipient_email: string;
  recipient_name?: string;
  recipient_company?: string;
  subject: string;
  body: string;
  status: "draft" | "scheduled" | "sent" | "bounced" | "responded";
  created_at: string;
  sent_at?: string;
  first_response_at?: string;
  response_content?: string;
  bounce_reason?: string;
  notes?: string;
  updated_at: string;
}

export interface ScanHistory {
  id: string;
  user_id: string;
  model_id: string;
  scan_started_at: string;
  scan_completed_at?: string;
  search_query?: string;
  results_count: number;
  new_leaks_found: number;
  status: "running" | "completed" | "failed";
  error_message?: string;
  created_at: string;
}

export interface DashboardStats {
  total_leaks: number;
  leaks_by_status: Record<string, number>;
  removal_rate: number;
  pending_leaks: number;
  trending_models: Model[];
  leaks_trend: Array<{ date: string; count: number }>;
}
