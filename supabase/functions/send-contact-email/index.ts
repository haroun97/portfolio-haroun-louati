
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactFormData = await req.json();

    console.log("Sending email with data:", { name, email, message });

    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["louatiharoun@gmail.com"],
      reply_to: [email],
      subject: `💼 New Portfolio Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Message</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                💼 New Portfolio Inquiry
              </h1>
              <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">
                Someone is interested in your work!
              </p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              
              <!-- Contact Info Card -->
              <div style="background-color: #f1f5f9; border-radius: 12px; padding: 24px; margin-bottom: 30px; border-left: 4px solid #667eea;">
                <h2 style="color: #1e293b; margin: 0 0 16px 0; font-size: 20px; font-weight: 600;">
                  📧 Contact Information
                </h2>
                <div style="display: flex; align-items: center; margin-bottom: 12px;">
                  <span style="font-weight: 600; color: #475569; min-width: 80px;">Name:</span>
                  <span style="color: #1e293b; font-size: 16px;">${name}</span>
                </div>
                <div style="display: flex; align-items: center;">
                  <span style="font-weight: 600; color: #475569; min-width: 80px;">Email:</span>
                  <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-size: 16px;">${email}</a>
                </div>
              </div>

              <!-- Message Card -->
              <div style="background-color: #ffffff; border: 2px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
                <h2 style="color: #1e293b; margin: 0 0 16px 0; font-size: 20px; font-weight: 600;">
                  💬 Message
                </h2>
                <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; border-left: 4px solid #10b981;">
                  <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <!-- Action Buttons -->
              <div style="text-align: center; margin-bottom: 30px;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #667eea; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; margin-right: 12px; box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);">
                  Reply to ${name}
                </a>
                <a href="mailto:${email}?subject=Re: Portfolio Inquiry&body=Hi ${name},%0D%0A%0D%0AThank you for your message!" style="display: inline-block; background-color: #10b981; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 2px 4px rgba(16, 185, 129, 0.3);">
                  Quick Reply
                </a>
              </div>

            </div>

            <!-- Footer -->
            <div style="background-color: #f1f5f9; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0 0 8px 0;">
                This message was sent from your portfolio contact form
              </p>
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                You can reply directly to this email to respond to ${name}
              </p>
            </div>

          </div>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
