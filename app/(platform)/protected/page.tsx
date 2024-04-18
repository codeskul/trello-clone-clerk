"use client";

import { UserButton, useAuth, useUser } from "@clerk/nextjs";

// Server Component
// import { auth, currentUser } from "@clerk/nextjs";

export default function ProtectedPage() {
  // const { userId } = useAuth();
  // const { user } = useUser();

  // Server Component
  // const user = await currentUser();
  // const { userId } = auth();
  return (
    <div>
      <h1>Protected Page</h1>
      {/* <p>User: {user?.firstName}</p>
      <p>User Id: {userId}</p> */}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
