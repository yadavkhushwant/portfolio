// Google Form submission service
export interface ContactFormData {
  name: string
  email: string
  subject?: string
  message?: string
}

export interface FormSubmissionResult {
  success: boolean
  message: string
}

export class GoogleFormService {
  private static readonly FORM_ID = '1FAIpQLSc9aBPCvhn8DJ02h5SGo8VAZOhcAP1p84bXrxWScDPp1vcH2g'
  private static readonly BASE_URL = 'https://docs.google.com/forms/d/e'
  
  // Entry IDs from your prefilled form
  private static readonly ENTRY_IDS = {
    name: 'entry.733645488',
    email: 'entry.214386625', 
    subject: 'entry.1288041641',
    message: 'entry.2139987410'
  }

  static async submitForm(formData: ContactFormData): Promise<FormSubmissionResult> {
    try {
      // Construct the form submission URL
      const formUrl = `${this.BASE_URL}/${this.FORM_ID}/formResponse`
      
      // Create form data
      const submitData = new FormData()
      submitData.append(this.ENTRY_IDS.name, formData.name)
      submitData.append(this.ENTRY_IDS.email, formData.email)
      submitData.append(this.ENTRY_IDS.subject, formData.subject ?? '')
      submitData.append(this.ENTRY_IDS.message, formData.message ?? '')
      submitData.append('submit', 'Submit')

      // Submit form using fetch with no-cors mode to avoid CORS issues
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors', // Important: Google Forms doesn't allow CORS
        body: submitData
      })

      // Note: With no-cors mode, we can't read the response
      // But if no error is thrown, the submission was likely successful
      return {
        success: true,
        message: 'Your message has been sent successfully! I\'ll get back to you soon.'
      }

    } catch (error) {
      console.error('Form submission error:', error)
      return {
        success: false,
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly via email.'
      }
    }
  }
}