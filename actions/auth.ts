export async function signup(formData: FormData) {
    console.log("formdata", {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
      });
}
