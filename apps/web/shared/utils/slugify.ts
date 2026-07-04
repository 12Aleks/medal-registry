export const slugify = (text: string): string => {
    const transliterated = text
        .normalize("NFKD")
        .replace(/[Аа]/g, "a")
        .replace(/[Бб]/g, "b")
        .replace(/[Вв]/g, "v")
        .replace(/[Гг]/g, "g")
        .replace(/[Дд]/g, "d")
        .replace(/[ЕеЁё]/g, "e")
        .replace(/[Жж]/g, "zh")
        .replace(/[Зз]/g, "z")
        .replace(/[ИиЙй]/g, "i")
        .replace(/[Кк]/g, "k")
        .replace(/[Лл]/g, "l")
        .replace(/[Мм]/g, "m")
        .replace(/[Нн]/g, "n")
        .replace(/[Оо]/g, "o")
        .replace(/[Пп]/g, "p")
        .replace(/[Рр]/g, "r")
        .replace(/[Сс]/g, "s")
        .replace(/[Тт]/g, "t")
        .replace(/[Уу]/g, "u")
        .replace(/[Фф]/g, "f")
        .replace(/[Хх]/g, "h")
        .replace(/[Цц]/g, "ts")
        .replace(/[Чч]/g, "ch")
        .replace(/[Шш]/g, "sh")
        .replace(/[Щщ]/g, "sch")
        .replace(/[Ыы]/g, "y")
        .replace(/[Ээ]/g, "e")
        .replace(/[Юю]/g, "yu")
        .replace(/[Яя]/g, "ya")
        .replace(/[ЬьЪъ]/g, "");

    const slug = transliterated
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    return slug || "item";
};
