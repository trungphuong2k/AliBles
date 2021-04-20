Khi khởi tạo git(git init ), git sẽ tạo 1 folder .git. Mọi người cho biết tác dụng của folder này là gì?
Giả sử, nếu xoá hoặc di chuyển folder này sang 1 thư mục khác thì điều gì sẽ xảy ra. Giải thích tại sao?
	
	-Tác dụng của file này như một đường dẫn(con trỏ) từ máy cá nhân đến repo trên github
	
		
		hook : thư mục này chứa các tập lệnh được thực thi tại một số thời điểm nhất định khi làm việc với Git 
		info : (cái này em không rõ ạ )
		log : Chứa lịch sử cho các chi nhánh khác nhau
		refs: Là  các kho lưu trữ, thẻ, các nhánh theo dõi từ xa hoặc các nhánh cục bộ.
		objects: Kho nội bộ của Git
		index: Khu vực chứa các tracked đã được stage và sẵn sang up lên git 

		COMMIT_EDITMSG: Đây là thông báo của cam kết cuối cùng.
  
		config: Chứa các cài đặt cho kho lưu trữ này và một cả kiểm tra trên kho lưu trữ còn trống hay ko 

		descreption : (không hiểu ạ) 
	
		HEAD:chứa nhánh hiện tại   

	
	-Nếu  chuyển  folder này sang 1 thư mục hoặc folder khác thì khi Git Bash Here ở folder ko có .git ,
	git sẽ ko biết phải dẫn file này đi đâu cả.khi git add . nó sẽ hiện : fatal: not a git repository (or any of the parent directories): .git 
	( có thể  hiểu : là không có bố mẹ dẫn đường nên là ko biết đi đâu cả) 
	-Nếu xóa  thì nó sẽ không bị quản lí bởi git nữa 

	- Vì nó không có .git như con trỏ giúp   kết nối giữa máy cá nhân và github 



	
