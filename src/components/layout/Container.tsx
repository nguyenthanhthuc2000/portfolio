import * as React from 'react';

import { mergeClasses } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}

const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, children, ...props }: ContainerProps, ref) => {
    return (
      <section
        className={mergeClasses(
          "w-full bg-gray mb-8 py-4 md:py-4 2xl:py-10",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:px-8">
          {children}
        </div>
      </section>
    );
  }
);

Container.displayName = 'Container';

export default Container;
