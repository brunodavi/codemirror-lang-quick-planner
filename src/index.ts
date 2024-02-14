import { parser } from "./syntax.grammar";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";

export const quickPlannerLanguage = LRLanguage.define({
    parser: parser.configure({
        props: [
            styleTags({
                CommandRange: t.operator,
                CommandSplit: t.operator,
                Range: t.keyword,
                Split: t.keyword,
                Time: t.operator,
                Title: t.string,
            }),
        ],
    }),
});

export function quickPlanner() {
    return new LanguageSupport(quickPlannerLanguage);
}
