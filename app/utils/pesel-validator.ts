
export function validatePESEL(pesel: string): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!pesel) {
    errors.push('PESEL jest wymagany');
    return { valid: false, errors };
  }

  const cleanPESEL = pesel.trim();

  if (cleanPESEL.length !== 11) {
    errors.push('PESEL musi zawierać 11 cyfr');
    return { valid: false, errors };
  }

  if (!/^\d{11}$/.test(cleanPESEL)) {
    errors.push('PESEL może zawierać tylko cyfry');
    return { valid: false, errors };
  }

  const digits = cleanPESEL.split('').map(Number);
  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];

  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += digits[i] * weights[i];
  }

  let checkDigit = (10 - (sum % 10)) % 10;

  if (digits[10] !== checkDigit) {
    errors.push('PESEL jest nieprawidłowy (błędna cyfra kontrolna)');
    return { valid: false, errors };
  }

  const dateError = validatePESELDate(cleanPESEL);
  if (dateError) {
    errors.push(dateError);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

function validatePESELDate(pesel: string): string | null {
  const year = parseInt(pesel.substring(0, 2));
  const month = parseInt(pesel.substring(2, 4));
  const day = parseInt(pesel.substring(4, 6));

  let fullYear: number;
  let actualMonth: number;

  if (month >= 1 && month <= 12) {
    fullYear = 1900 + year;
    actualMonth = month;
  } else if (month >= 21 && month <= 32) {
    fullYear = 2000 + year;
    actualMonth = month - 20;
  } else if (month >= 41 && month <= 52) {
    fullYear = 1800 + year;
    actualMonth = month - 40;
  } else if (month >= 61 && month <= 72) {
    fullYear = 2100 + year;
    actualMonth = month - 60;
  } else {
    return 'PESEL zawiera nieprawidłowy miesiąc';
  }

  if (day < 1 || day > 31) {
    return 'PESEL zawiera nieprawidłowy dzień miesiąca';
  }

  const birthDate = new Date(fullYear, actualMonth - 1, day);
  const today = new Date();

  if (birthDate > today) {
    return 'Data urodzenia nie może być w przyszłości';
  }

  return null;
}

export function getPESELInfo(pesel: string): {
  sex: 'male' | 'female';
  birthDate: Date | null;
} | null {
  if (!validatePESEL(pesel).valid) {
    return null;
  }

  const year = parseInt(pesel.substring(0, 2));
  const month = parseInt(pesel.substring(2, 4));
  const day = parseInt(pesel.substring(4, 6));
  const sexDigit = parseInt(pesel.substring(9, 10));

  let fullYear: number;
  let actualMonth: number;

  if (month >= 1 && month <= 12) {
    fullYear = 1900 + year;
    actualMonth = month;
  } else if (month >= 21 && month <= 32) {
    fullYear = 2000 + year;
    actualMonth = month - 20;
  } else if (month >= 41 && month <= 52) {
    fullYear = 1800 + year;
    actualMonth = month - 40;
  } else {
    fullYear = 2100 + year;
    actualMonth = month - 60;
  }

  return {
    sex: sexDigit % 2 === 0 ? 'female' : 'male',
    birthDate: new Date(fullYear, actualMonth - 1, day),
  };
}
