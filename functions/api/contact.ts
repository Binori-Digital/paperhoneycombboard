interface Env {
  EMAIL_SENDER: Fetcher;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  // Forward the submission to the email worker over the service binding
  const body = await request.text();
  return env.EMAIL_SENDER.fetch('https://email-sender.internal/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });
};
