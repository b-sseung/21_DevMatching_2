const base = 'https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev';

export const request = async (url, options = {}) => {
  try {
    const fullUrl = `${base}${url}`
    const res = await fetch(fullUrl, options);

    if (res.ok) {
      return await res.json();
    }

    throw new Error('API 통신 실패');
  } catch (e) {
    new Error(e.message);
  }
}