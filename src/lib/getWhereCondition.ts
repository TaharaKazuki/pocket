export const getWhereCondition = (listType: string, userId: string) => {
  switch (listType) {
    case "all":
      return { userId };
    case "favorite":
      return { isLiked: true, userId };
    case "archived":
      return { isArchived: true, userId };
    default:
      return { isArchived: false, userId };
  }
};
