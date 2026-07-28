// /api/verify-payment.js on Vercel
export default async function handler(req, res) {
  if(req.method !== 'POST') return res.status(405).end();

  const { reference } = req.body;

  const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
    headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` }
  });

  const data = await response.json();
  
  if(data.status && data.data.status === 'success'){
    return res.status(200).json({
      status: true, 
      email: data.data.customer.email,
      subscription_code: data.data.authorization?.authorization_code
    });
  } else {
    return res.status(400).json({status: false});
  }
     }
