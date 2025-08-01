export default function PrintError(error: unknown) {
    const message =
        typeof error === 'object' &&
            error !== null &&
            'message' in error
            ? String((error as { message: unknown }).message)
            : 'unknown error';
    console.error(message);
}