
export const validateChirp = (input: string): string | null => {
    const trimmed = input.trim()
  
    if (!trimmed) return "Input is required."
    if (/[<>\\'"`;]/.test(trimmed)) return "Contains unsafe characters."
    if (/script|javascript:/i.test(trimmed)) return "Possible injection detected."
    if (trimmed.length > 280) return "Chirp too long. Keep it under 280 characters."
  
    return null // No error, input is valid
}

export const validateSearch = (input: string): string | null => {
    const trimmed = input.trim()
  
    if (!trimmed) return "Input is required."
    if (/[<>\\'"`;]/.test(trimmed)) return "Contains unsafe characters."
    if (/script|javascript:/i.test(trimmed)) return "Possible injection detected."
    if (trimmed.length > 20) return "Search too long. Keep it under 20 characters."
  
    return null // No error, input is valid
}
  
export const validateUsername = (username: string): string | null => {
    if (!username.trim()) return "Username is required."
    if (!/^[a-zA-Z0-9_]{4,16}$/.test(username)) return "Invalid username format."

    return null
}
  
export const validateEmail = (email: string): string | null => {
    if (!email.trim()) return "Email is required."
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return "Invalid email format."

    return null
}

export const validatePasswordMatch = (password: string, rePassword: string) =>{
    if (password !== rePassword){
        return 'Passwords do not match'
    }

    return null
}
  