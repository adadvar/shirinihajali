export function en2fa(enNumber: string | number | undefined | null): string {
  if (enNumber === null || enNumber === undefined) return "";

  const persianNumbers: string[] = [
    "۰",
    "۱",
    "۲",
    "۳",
    "۴",
    "۵",
    "۶",
    "۷",
    "۸",
    "۹",
  ];

  return enNumber.toString().replace(/\d/g, (match: string): string => {
    //@ts-ignore
    return persianNumbers[parseInt(match)];
  });
}

export function formatPrice(number: number | string): string {
  const num = typeof number === "string" ? parseFloat(number) : number;

  if (isNaN(num)) return "0";

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
