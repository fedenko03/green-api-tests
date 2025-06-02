export const runSafe = async (
  testFn: () => Promise<void>,
  testName: string
) => {
  try {
    await testFn();
  } catch (error: any) {
    const status = error?.response?.status;
    const code = error?.code;
    const message = error?.message || 'Unknown error';
    const data = error?.response?.data;

    console.error(`Error in "${testName}": ${message}`);
    if (status) console.error(`↳ Status: ${status}`);
    if (code) console.error(`↳ Code: ${code}`);
    if (typeof data === 'string') {
      console.error(`↳ Response data:\n${data}`);
    }

    throw error;
  }
};
