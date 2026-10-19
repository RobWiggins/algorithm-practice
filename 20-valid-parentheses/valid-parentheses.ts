function isPair(open: string | undefined, close: string): boolean {
  return (
    (open === '(' && close === ')') ||
    (open === '[' && close === ']') ||
    (open === '{' && close === '}')
  );
}

function isValid(s: string): boolean {
  const stack: string[] = [];

  for (const char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      const poppedChar = stack.pop();

      if (!isPair(poppedChar, char)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}