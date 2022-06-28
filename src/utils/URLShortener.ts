import { MD5, enc } from "crypto-js";

class LinkShortener {
  shorten(text: string, salt?: string): string {
    salt = salt || `SECRET`;

    var HASH = MD5(text + salt)
      .toString(enc.Base64)
      .substring(0, 6);

    return HASH;
  }
}

export function shortenURL(url: string, salt?: string) {
  return new LinkShortener().shorten(url, salt);
}

export function isValidURL(url: string) {
  let res =
    /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(
      url
    );

  if (res) {
    return true;
  }

  return false;
}
