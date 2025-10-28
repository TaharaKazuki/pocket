export const getPageTitle = (listType: string) => {
  switch (listType) {
    case "all":
      return "すべての記事";
    case "favorite":
      return "お気に入りの記事";
    case "archived":
      return "アーカイブの記事";
  }
};
