interface GenericProps<T> {
    data: T;
    render: (data: T) => React.ReactNode;
}

const GenericComponent: <T>(props: GenericProps<T>) => JSX.Element | null = ({ data, render }) => {
    // Ensure render() returns a valid ReactNode or null
    const renderedContent = render(data);
  
    // Explicitly check for null or undefined
    if (renderedContent === null || renderedContent === undefined) {
      return null;
    }

    // Narrow the type to a valid React element
    return renderedContent as JSX.Element;
};

export default GenericComponent;