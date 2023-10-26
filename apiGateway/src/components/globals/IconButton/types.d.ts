type IconButtonProps = {
    icon: IconCatalog;
    args: any;
    action: ({ values }: { values: any }) => any,
    tw?: [string?, string?],
}
