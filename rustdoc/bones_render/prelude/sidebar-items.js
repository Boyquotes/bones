window.SIDEBAR_ITEMS = {"derive":[["Deref","Implements `Deref` for single-item structs. This is especially useful when utilizing the newtype pattern."],["DerefMut","Implements `DerefMut` for single-item structs. This is especially useful when utilizing the newtype pattern."],["TypeUlid","Derive macro for the `TypeUlid` trait."]],"enum":[["CoreStage","A [`StageLabel`] for the 5 core stages."],["EcsError","The types of errors used throughout the ECS."],["EulerRot","Euler rotation sequences."]],"fn":[["create_bitset","Creates a bitset big enough to contain the index of each entity. Mostly used to create caches."],["default","Free-standing, shorter equivalent to [`Default::default()`]."],["dmat2","Creates a 2x2 matrix from column vectors."],["dmat3","Creates a 3x3 matrix from column vectors."],["dmat4","Creates a 4x4 matrix from column vectors."],["dquat","Creates a quaternion from `x`, `y`, `z` and `w` values."],["dvec2","Creates a 2-dimensional vector."],["dvec3","Creates a 3-dimensional vector."],["dvec4","Creates a 4-dimensional vector."],["ivec2","Creates a 2-dimensional vector."],["ivec3","Creates a 3-dimensional vector."],["ivec4","Creates a 4-dimensional vector."],["mat2","Creates a 2x2 matrix from column vectors."],["mat3","Creates a 3x3 matrix from column vectors."],["mat3a","Creates a 3x3 matrix from column vectors."],["mat4","Creates a 4x4 matrix from column vectors."],["quat","Creates a quaternion from `x`, `y`, `z` and `w` values."],["uvec2","Creates a 2-dimensional vector."],["uvec3","Creates a 3-dimensional vector."],["uvec4","Creates a 4-dimensional vector."],["vec2","Creates a 2-dimensional vector."],["vec3","Creates a 3-dimensional vector."],["vec3a","Creates a 3-dimensional vector."],["vec4","Creates a 4-dimensional vector."]],"macro":[["bitor","Shorthand for combining bitsets with bit_or."],["bitset","Shorthand for setting bits on the bitset container."],["impl_bitset","Implements the `BitSet` trait members for your type through `DerefMut`."]],"mod":[["bool","`bool` vector mask types. "],["f32","`f32` vector, quaternion and matrix types. "],["f64","`f64` vector, quaternion and matrix types. "],["i32","`i32` vector types. "],["swizzles","Traits adding swizzle methods to all vector types. "],["u32","`u32` vector types. "]],"struct":[["Affine2","A 2D affine transform, which can represent translation, rotation, scaling and shear."],["Affine3A","A 3D affine transform, which can represent translation, rotation, scaling and shear."],["AssetPath","A path to an asset."],["AssetProviderMut","A mutable borrow of an [`AssetProvider`]."],["AssetProviderRef","A borrow of an [`AssetProvider`]."],["AssetProviders","A resource that may be used to access [`AssetProvider`]s for all the different registered asset types."],["AssetProvidersResource","The type of the [`AssetProviders`] resource."],["AtomicComponentStore","A typed, wrapper handle around [`UntypedComponentStore`] that is runtime borrow checked and can be cheaply cloned. Think can think of it like an `Arc<RwLock<ComponentStore>>`."],["AtomicComponentStoreRef","A read-only borrow of [`AtomicComponentStore`]."],["AtomicComponentStoreRefMut","A mutable borrow of [`AtomicComponentStore`]."],["AtomicRef","A wrapper type for an immutably borrowed value from an `AtomicRefCell<T>`."],["AtomicRefCell","A threadsafe analogue to RefCell."],["AtomicRefMut","A wrapper type for a mutably borrowed value from an `AtomicRefCell<T>`."],["AtomicResource","A handle to a resource from a [`Resources`] collection."],["BVec2","A 2-dimensional `bool` vector mask."],["BVec3","A 3-dimensional `bool` vector mask."],["BVec3A","A 3-dimensional SIMD vector mask."],["BVec4","A 4-dimensional `bool` vector mask."],["BVec4A","A 4-dimensional SIMD vector mask."],["BitFmt","BitSet formatter."],["BitSetVec","The type of bitsets used to track entities in component storages. Mostly used to create caches."],["BorrowError","An error returned by `AtomicRefCell::try_borrow`."],["BorrowMutError","An error returned by `AtomicRefCell::try_borrow_mut`."],["ComponentBitsetIterator","Read-only iterator over components matching a given bitset"],["ComponentBitsetIteratorMut","Mutable iterator over components matching a given bitset"],["ComponentStore","A typed wrapper around [`UntypedComponentStore`]."],["ComponentStores","A collection of [`ComponentStore<T>`]."],["DAffine2","A 2D affine transform, which can represent translation, rotation, scaling and shear."],["DAffine3","A 3D affine transform, which can represent translation, rotation, scaling and shear."],["DMat2","A 2x2 column major matrix."],["DMat3","A 3x3 column major matrix."],["DMat4","A 4x4 column major matrix."],["DQuat","A quaternion representing an orientation."],["DVec2","A 2-dimensional vector."],["DVec3","A 3-dimensional vector."],["DVec4","A 4-dimensional vector."],["Entities","Holds a list of alive entities."],["EntitiesIterWith","Iterator over entities returned by [`Entities::iter_with`]."],["Entity","An entity index."],["EntityIterator","Iterator over entities using the provided bitset."],["Handle","A typed handle to an asset."],["IVec2","A 2-dimensional vector."],["IVec3","A 3-dimensional vector."],["IVec4","A 4-dimensional vector."],["Mat2","A 2x2 column major matrix."],["Mat3","A 3x3 column major matrix."],["Mat3A","A 3x3 column major matrix."],["Mat4","A 4x4 column major matrix."],["Quat","A quaternion representing an orientation."],["Res","[`SystemParam`] for getting read access to a resource."],["ResMut","[`SystemParam`] for getting mutable access to a resource."],["Resources","A collection of resources."],["System","Struct used to run a system function using the world."],["SystemStage","A collection of systems that will be run in order."],["SystemStages","An ordered collection of [`SystemStage`]s."],["TypedComponentOps","Implements typed operations on top of a [`UntypedComponentStore`]."],["UVec2","A 2-dimensional vector."],["UVec3","A 3-dimensional vector."],["UVec4","A 4-dimensional vector."],["Ulid","A Ulid is a unique 128-bit lexicographically sortable identifier"],["UntypedComponentBitsetIterator","Iterates over components using a provided bitset. Each time the bitset has a 1 in index i, the iterator will fetch data from the storage at index i and return it."],["UntypedComponentBitsetIteratorMut","Iterates over components using a provided bitset. Each time the bitset has a 1 in index i, the iterator will fetch data from the storage at index i."],["UntypedComponentStore","Holds components of a given type indexed by `Entity`."],["UntypedHandle","An untyped handle to an asset."],["UntypedResource","An untyped resource that may be inserted into [`UntypedResources`]."],["UntypedResourceInfo","Used to construct an [`UntypedResource`]."],["UntypedResources","Storage for un-typed resources."],["Vec2","A 2-dimensional vector."],["Vec3","A 3-dimensional vector."],["Vec3A","A 3-dimensional vector with SIMD support."],["Vec4","A 4-dimensional vector with SIMD support."],["World","The [`World`] is simply a collection of [`Resources`], and [`ComponentStores`]."]],"trait":[["AssetProvider","Trait for asset providers."],["BitSet","The BitSet API."],["EcsData","Helper trait that is auto-implemented for anything that may be stored in the ECS’s untyped storage."],["IntoSystem","Converts a function into a [`System`]."],["QueryItem","A type representing a component-joining entity query."],["RawFns","Helper trait that is auto-implemented for all `Clone`-able types. Provides easy access to drop and clone funcitons for raw pointers."],["StageLabel","Trait for things that may be used to identify a system stage."],["SystemParam","Trait used to implement parameters for [`System`] functions."],["TypeUlid","Associates a [`Ulid`] ID to a Rust type."],["TypedEcsData","Helper trait that is auto-implemented for anything that may be stored in the ECS’s typed storage."],["UntypedAssetProvider","Trait implemented for asset providers that can return untyped pointers to their assets."],["Vec2Swizzles",""],["Vec3Swizzles",""],["Vec4Swizzles",""]],"type":[["Comp","[`SystemParam`] for getting read access to a [`ComponentStore`]."],["CompMut","[`SystemParam`] for getting mutable access to a [`ComponentStore`]."],["ResAssetProviders","Type alias for getting the [`AssetProviders`] resource."],["SystemResult","The result of a `System`’s execution."],["UlidMap","Faster hash map using [`FxHashMap`] and a ULID key."]]};