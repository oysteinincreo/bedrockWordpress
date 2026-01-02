import { registerBlockType } from "@wordpress/blocks";
import type { BlockConfiguration, BlockIcon } from "@wordpress/blocks";
import edit from "./edit";
import save from "./save";
import metadata from "./block.json";

interface HeroAttributes {
  title: string;
  text: string;
  imageUrl: string;
  imageId: number;
  imageAlt: string;
}

interface HeroBlockMetadata extends BlockConfiguration<HeroAttributes> {
  $schema?: string;
  apiVersion: number;
  name: string;
  title: string;
  category: string;
  icon: BlockIcon;
  description: string;
  editorScript?: string;
  editorStyle?: string;
  style?: string;
}

const blockMetadata = metadata as HeroBlockMetadata;

registerBlockType<HeroAttributes>(blockMetadata.name, {
  ...blockMetadata,
  edit,
  save,
});
