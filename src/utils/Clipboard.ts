class Clipboard {
  static writeText = async (text: string): Promise<boolean> => {
    return navigator.clipboard
      .writeText(text)
      .then((res) => true)
      .catch((err) => false);
  };
}

export default Clipboard;
