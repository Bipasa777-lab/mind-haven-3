/**
 * Anonymize sensitive fields (email, phone, name)
 */
export function anonymizeUser(user: any) {
  return {
    ...user,
    email: user.email ? "hidden@example.com" : null,
    phone: user.phone ? "**********" : null,
    name: "Anonymous",
  };
}
