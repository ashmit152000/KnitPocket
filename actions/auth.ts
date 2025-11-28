"use server";

export async function handleFormSubmit(
  prevState: { errors: string[] },
  formData: FormData
): Promise<{ errors: string[] }> {
  for (const [key, value] of formData.entries()) {
    console.log(key, value);
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ errors: [] });
    }, 3000);
  });
}
