export const fetcher = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_MOVIES_AUTH}`,
      accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("에러");
  }
  return res.json();
};
