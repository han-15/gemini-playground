export const CONFIG = {
    API: {
        VERSION: 'v1alpha',
        MODEL_NAME: 'models/gemini-2.0-flash-exp'
    },
    // You can change the system instruction to your liking
    SYSTEM_INSTRUCTION: {
        TEXT: `You are my IELTS Speaking coach. Please simulate the IELTS Speaking test with me.Ask me questions from IELTS Speaking Part 1, Part 2, and Part 3.
After each answer, give me detailed feedback on:
Grammar mistakes
Vocabulary (suggest more precise or varied words if possible)
Pronunciation issues (if any, based on my writing)
Fluency and coherence
How my answer would likely be scored (Band 1–9)
Suggest ways to improve my answers to reach Band 7 or higher.
Keep the conversation natural and friendly.
Let’s begin with a random Part 1 topic.`,
    },
    // Default audio settings
    AUDIO: {
        SAMPLE_RATE: 16000,
        OUTPUT_SAMPLE_RATE: 24000,      // If you want to have fun, set this to around 14000 (u certainly will)
        BUFFER_SIZE: 2048,
        CHANNELS: 1
    },
    // If you are working in the RoArm branch 
    // ROARM: {
    //     IP_ADDRESS: '192.168.1.4'
    // }
  };
  
  export default CONFIG; 