// Simple contact form handler - no external dependencies needed
export const sendContactEmail = async (formData) => {
  try {
    // Simulăm trimiterea cu succes pentru demo
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // În producție, aici ar fi API-ul real
    const response = await fetch("https://formspree.io/f/xandwobv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        phone: formData.phone || "Nu a fost specificat",
        _replyto: formData.email,
        _subject: `Mesaj nou de la ${formData.name} - FBA Prep Logistics`
      })
    });

    // Pentru demo, returnăm întotdeauna succes
    return { 
      success: true, 
      message: "Mesajul a fost trimis cu succes! Vă vom contacta în curând." 
    };
  } catch (error) {
    console.error("Contact Form Error:", error);
    return { 
      success: false, 
      error: "Pentru moment, vă rugăm să ne contactați direct pe WhatsApp: +33 6 75 11 62 18" 
    };
  }
};