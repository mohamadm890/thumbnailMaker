import { SignIn } from "@clerk/nextjs";
import { dark } from '@clerk/ui/themes'



export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn
      path="/sign-in"
      appearance={{
        
        theme: dark

      }}
      />
    </div>
  );
}