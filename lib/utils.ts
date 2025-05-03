// Server side validation so typescript stops complaining about form data
export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

// Helper function to supply form error message
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


/**
* Service for fetching GitHub repository data
*/

type ReadmeResponse = {
  content: string;
  encoding: string; // Usually 'base64'
  name: string;
};

/**
 * Fetches the README content from a GitHub repository
 * @param owner - The GitHub username/organization
 * @param repo - The repository name
 * @returns The decoded README content
 */
export async function fetchReadme(owner: string, repo: string): Promise<string> {
  try {
    const headers: HeadersInit = {};

    // Add GitHub token if available
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data: ReadmeResponse = await response.json();

    // GitHub returns the content as base64-encoded
    return decodeBase64(data.content);
  } catch (error) {
    console.error("Error fetching README:", error);
    return "Unable to load README content from GitHub.";
  }
}

/**
 * Decodes a base64 string to UTF-8
 */
function decodeBase64(base64: string): string {
  // Remove any line breaks that GitHub might include
  const cleanedBase64 = base64.replace(/\n/g, '');

  if (typeof window !== 'undefined') {
    // Browser environment
    return atob(cleanedBase64);
  } else {
    // Node.js environment (for SSR)
    return Buffer.from(cleanedBase64, 'base64').toString('utf-8');
  }
}