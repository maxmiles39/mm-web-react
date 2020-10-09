export async function getMessage() {

    const response = await fetch('/api/GetMessage');
    return await response.json();
}