import { BlockEditProps } from "@wordpress/blocks";
import {
  useBlockProps,
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

type HeroAttributes = {
  title: string;
  text: string;
  imageUrl: string;
  imageId: number;
  imageAlt: string;
};

export default function Edit({
  attributes,
  setAttributes,
}: BlockEditProps<HeroAttributes>) {
  const { title, text, imageUrl, imageAlt } = attributes;

  return (
    <section {...useBlockProps({ className: "p-16 bg-gray-100" })}>
      <RichText
        tagName="h1"
        value={title}
        onChange={(value) => setAttributes({ title: value })}
        placeholder="Hero title…"
        className="text-4xl font-bold text-blue-800"
      />
      <RichText
        tagName="p"
        value={text}
        onChange={(value) => setAttributes({ text: value })}
        placeholder="Text…"
        className="text-2xl text-green-600"
      />

      {/* Bildefelt */}
      <MediaUploadCheck>
        <MediaUpload
          onSelect={(media) =>
            setAttributes({
              imageUrl: media.url,
              imageId: media.id,
              imageAlt: media.alt ?? "",
            })
          }
          allowedTypes={["image"]}
          value={attributes.imageId}
          render={({ open }) => (
            <div className="mt-4">
              {imageUrl ? (
                <>
                  <img
                    src={imageUrl}
                    alt={imageAlt}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <Button
                    onClick={() =>
                      setAttributes({ imageUrl: "", imageId: 0, imageAlt: "" })
                    }
                    variant="secondary"
                  >
                    Fjern bilde
                  </Button>
                </>
              ) : (
                <Button onClick={open} variant="primary">
                  Velg bilde
                </Button>
              )}
            </div>
          )}
        />
      </MediaUploadCheck>
    </section>
  );
}
