/**
 * Fetches the README content from a GitHub repository
 * @param owner - The GitHub username/organization
 * @param repo - The repository name
 * @returns The raw README content
 */
export const fetchReadme = async (owner: string, repo: string): Promise<string> => {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`);

    if (!response.ok) {
      throw new Error(`Failed to fetch README metadata: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.download_url) {
      throw new Error('Could not find raw download URL for README');
    }

    const rawResponse = await fetch(data.download_url);

    if (!rawResponse.ok) {
      throw new Error(`Failed to fetch raw README: ${rawResponse.statusText}`);
    }

    return await rawResponse.text();

  } catch (error) {
    console.error("Error fetching README:", error);
    throw error;
  }
};

/**
 * Validates a string to ensure it's not empty and within a maximum length
 * @param value - String to validate
 * @param maxLength - Maximum allowed length
 * @returns Boolean indicating if the string is valid
 */
export const validateString = (
  value: unknown,
  maxLength: number
): boolean => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

/**
 * Extracts an error message from an error object
 * @param error - The error to extract a message from
 * @returns String error message
 */
export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};