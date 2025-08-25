// Contact form handler with Formspree integration
export const sendContactEmail = async (formData) => {
  try {
    const response = await fetch("https://formspree.io/f/xandwobv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company || "Nu a fost specificat",
        phone: formData.phone || "Nu a fost specificat",
        message: formData.message,
        _replyto: formData.email,
        _subject: `Mesaj nou de la ${formData.name} - FBA Prep Logistics`
      })
    });

    if (response.ok) {
      return { 
        success: true, 
        message: "Mesajul a fost trimis cu succes! Vă vom contacta în curând." 
      };
    } else {
      throw new Error("Eroare la trimiterea mesajului");
    }
  } catch (error) {
    console.error("Contact Form Error:", error);
    return { 
      success: false, 
      error: "Pentru moment, vă rugăm să ne contactați direct pe WhatsApp: +33 6 75 11 62 18" 
    };
  }
};
