const translateText = async (text: string, fromLang: string, toLang: string): Promise<string> => {
  try {
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLang}|${toLang}`);
    const data = await response.json();
    if (data && data.responseData && data.responseData.translatedText) {
      return data.responseData.translatedText;
    } else {
      throw new Error('Translation failed');
    }
  } catch (error) {
    throw new Error('Translation failed');
  }
};

export default translateText;
