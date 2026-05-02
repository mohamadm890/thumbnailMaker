import { prisma } from "../../lib/db/prisma";

type ClerkUser = {
  id: string;
  email_addresses: { email_address: string }[];
};

export async function handleUserCreated(user: ClerkUser) {
  await prisma.user.create({
    data: {
      clerkId: user.id,
      email: user.email_addresses?.[0]?.email_address || "",
      createdAt: new Date(),
    },
  });
}