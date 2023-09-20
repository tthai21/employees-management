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
}