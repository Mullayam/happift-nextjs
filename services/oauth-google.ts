export const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
}&redirect_uri=${
  process.env.NEXT_PUBLIC_GOOGLE_CALLBACK
}&response_type=code&scope=${encodeURIComponent(
  "https://www.googleapis.com/auth/userinfo.profile"
)}&access_type=offline&include_granted_scopes=true&state=state_parameter_passthrough_value`

export async function VerifyTokenForPayload(token, client) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  })
  return await ticket.getPayload()
}
