import {
    App,
    Editor,
    MarkdownView,
    Modal,
    Plugin,
    PluginSettingTab,
    Setting,
} from "obsidian";
import { CharacterData } from "./model/character";
import CharacterStats from "./ui/CharacterStats.svelte";

// Remember to rename these classes and interfaces!

interface Obsidian5eCharacterSheetSettings {
    mySetting: string;
}

const DEFAULT_SETTINGS: Obsidian5eCharacterSheetSettings = {
    mySetting: "default",
};

export default class Obsidian5eCharacterSheet extends Plugin {
    settings: Obsidian5eCharacterSheetSettings;

    async onload() {
        await this.loadSettings();

        /* let view = app.workspace.getActiveViewOfType(MarkdownView);
    const frontmatter = app.metadataCache.getFileCache(view.file)?.frontmatter; */

        this.registerMarkdownCodeBlockProcessor(
            "character-stats",
            (_source, el, _ctx) => {
                new CharacterStats({
                    target: el,
                    props: { character: new CharacterData("Nea", "Ranger") },
                });
            }
        );

        // This adds an editor command that can perform some operation on the current editor instance
        this.addCommand({
            id: "sample-editor-command",
            name: "Sample editor command",
            editorCallback: (editor: Editor, view: MarkdownView) => {
                console.log(editor.getSelection());
                editor.replaceSelection("Sample Editor Command");
            },
        });
        // This adds a complex command that can check whether the current state of the app allows execution of the command
        this.addCommand({
            id: "open-sample-modal-complex",
            name: "Open sample modal (complex)",
            checkCallback: (checking: boolean) => {
                // Conditions to check
                const markdownView =
                    this.app.workspace.getActiveViewOfType(MarkdownView);
                if (markdownView) {
                    // If checking is true, we're simply "checking" if the command can be run.
                    // If checking is false, then we want to actually perform the operation.
                    if (!checking) {
                        new SampleModal(this.app).open();
                    }

                    // This command will only show up in Command Palette when the check function returns true
                    return true;
                }
            },
        });

        // This adds a settings tab so the user can configure various aspects of the plugin
        this.addSettingTab(new SampleSettingTab(this.app, this));
    }

    onunload() {}

    async loadSettings() {
        this.settings = Object.assign(
            {},
            DEFAULT_SETTINGS,
            await this.loadData()
        );
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }
}

class SampleModal extends Modal {
    constructor(app: App) {
        super(app);
    }

    onOpen() {
        const { contentEl } = this;
        contentEl.setText("Woah!");
    }

    onClose() {
        const { contentEl } = this;
        contentEl.empty();
    }
}

class SampleSettingTab extends PluginSettingTab {
    plugin: Obsidian5eCharacterSheet;

    constructor(app: App, plugin: Obsidian5eCharacterSheet) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;

        containerEl.empty();

        containerEl.createEl("h2", { text: "Settings for my awesome plugin." });

        new Setting(containerEl)
            .setName("Setting #1")
            .setDesc("It's a secret")
            .addText((text) =>
                text
                    .setPlaceholder("Enter your secret")
                    .setValue(this.plugin.settings.mySetting)
                    .onChange(async (value) => {
                        console.log("Secret: " + value);
                        this.plugin.settings.mySetting = value;
                        await this.plugin.saveSettings();
                    })
            );
    }
}
