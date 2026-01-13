import { useForm } from 'react-hook-form';

export default function SignIn() { 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-2">
        <div className=' bg-amber-100 flex'>
          <div className='flex justify-center items-center self-center w-full px-10 py-10'>
            <form onSubmit={handleSubmit((data) => console.log(data))} className='custom-form'>

              <div className='flex flex-col min-w-75'>

                <label htmlFor="email">Email</label>
                <input {...register('email', { required: true })} className='' />
                {errors.email && <p>Email is required.</p>}

                <label htmlFor="password">Password</label>
                <input {...register('password', { required: true })} />
                {errors.password && <p>Password is required.</p>}

              </div>
            
              {/* <input {...register('firstName')}  className=''/>
              <input {...register('lastName', { required: true })} /> */}
                            
                
              {/* <input {...register('age', { pattern: /\d+/ })} /> */}
                
              {/* {errors.age && <p>Please enter number for age.</p>} */}
                
              <input type="submit" />
            </form>
          </div>
        </div>
        
        <aside className="sign-in-banner min-h-screen flex justify-center">
          <div className='flex flex-col justify-center items-center self-center gap-y-4'>
            <h1 className='text-7xl font-extrabold'>Welcome</h1>
            <p className='text-xl font-normal'>Sign In to continue</p>
          </div>

        </aside>
      </div>
      <p>hello</p>
    </main>
  );
}
