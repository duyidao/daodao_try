export const createReusableTemplate = () => {
  let render: ((props?: any) => any) | undefined;
  const DefineTemplate = {
    setup(_: any, { slots }: { slots: any }) {
      return () => {
        render = slots.default;
      };
    },
  };
  const UseTemplate = (props?: any) => render?.(props);

  return [DefineTemplate, UseTemplate];
};
