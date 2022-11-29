import { getProviders } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

async function SignInPage() {
  const providers = await getProviders();

  return (
    <div className="grid justify-center">
      <div>
        <Image
          className="rounded-full mx-2 object-cover"
          width={400}
          height={400}
          src="https://avatars.dicebear.com/api/big-smile/your-cust.svg"
          alt="Profile Picture"
        />
      </div>

      <SignInComponent providers={providers} />
    </div>
  );
}

export default SignInPage;
