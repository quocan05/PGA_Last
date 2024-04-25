export const convertDataSelect = (data: any) => {
  return {
    label: data.name,
    value: data.id,
  };
};
