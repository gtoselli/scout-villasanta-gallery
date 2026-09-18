import { Heading } from "@chakra-ui/react";

export const DisableAlert = () => {
  return (
    <div className="mt-16 flex items-center justify-center px-8">
      <div className="max-w-md">
        <img className="mb-4 w-20" />
        <Heading>Il sito è temporaneamente disabilitato</Heading>
        <p>
          Il sito è temporaneamente disabilitato per manutenzione. Torna tra
          qualche giorno!
        </p>
      </div>
    </div>
  );
};
