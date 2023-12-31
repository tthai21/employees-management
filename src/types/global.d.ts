export {};
declare global {
  interface user {
    name: string | null;
    email: string | null;
    mobile: string | null;
    department: string | null;
    role: string | null;
  }
  interface Employee {
    id: number | null;
    name: string | null;
    email: string | null;
    mobile: string | null;
    department: string | null;
    role: string | null;
  }

  interface userResponse {
    name: string | null;
    email: string | null;
    role: string | null;
  }
  interface DecodedToken {
    unique_name: string;
    email: string;
    role: string;
  }
}
